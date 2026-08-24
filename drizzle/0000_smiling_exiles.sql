CREATE TABLE "inquiries" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"deadline" varchar(50) NOT NULL,
	"length" varchar(50) NOT NULL,
	"budget" varchar(50) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
