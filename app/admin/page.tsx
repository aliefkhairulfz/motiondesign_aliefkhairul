import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { desc } from "drizzle-orm";
import { LogoutButton } from "./logout-button";

export default async function AdminDashboard() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/sign-in");
    }

    const allInquiries = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));

    return (
        <main className="min-h-screen bg-white text-neutral-950 pt-24 md:pt-32 pb-24">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                {/* SaaS Header Block */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-neutral-100 pb-6">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">Inquiries</h1>
                        <p className="text-neutral-500 text-sm mt-1">Manage and review client project requests.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-neutral-600 mr-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                            {session.user.email}
                        </div>
                        <LogoutButton />
                    </div>
                </div>

                {/* SaaS Data Table */}
                {allInquiries.length === 0 ? (
                    <div className="py-24 text-center flex flex-col items-center justify-center border border-dashed border-neutral-200 rounded-xl bg-neutral-50/50">
                        <p className="text-neutral-500 text-sm">No inquiries found.</p>
                    </div>
                ) : (
                    <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-neutral-50 border-b border-neutral-200 text-xs uppercase tracking-wider font-semibold text-neutral-500">
                                    <tr>
                                        <th className="px-6 py-4 whitespace-nowrap">Client</th>
                                        <th className="px-6 py-4 whitespace-nowrap">Project Scope</th>
                                        <th className="px-6 py-4 whitespace-nowrap">Timeline</th>
                                        <th className="px-6 py-4 whitespace-nowrap">Budget</th>
                                        <th className="px-6 py-4 whitespace-nowrap">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-100">
                                    {allInquiries.map((inquiry) => (
                                        <tr key={inquiry.id} className="hover:bg-neutral-50/50 transition-colors group">
                                            <td className="px-6 py-5 whitespace-nowrap align-top">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-semibold">
                                                        {inquiry.email.substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <span className="font-medium text-sm text-neutral-900">{inquiry.email}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 align-top min-w-[300px] max-w-[500px]">
                                                <div className="flex flex-col gap-1.5">
                                                    <span className="text-sm font-medium text-neutral-900">{inquiry.length} Video</span>
                                                    <p className="text-sm text-neutral-500 whitespace-pre-wrap leading-relaxed">
                                                        {inquiry.description}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap align-top">
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 text-xs font-medium">
                                                    {inquiry.deadline}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap align-top">
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 text-xs font-medium">
                                                    {inquiry.budget}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap align-top text-sm text-neutral-500">
                                                {new Date(inquiry.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
