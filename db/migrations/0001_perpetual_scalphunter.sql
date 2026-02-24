CREATE TABLE `contact_messages` (
	`id` varchar(36) NOT NULL,
	`full_name` varchar(150) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(30),
	`company` varchar(150),
	`service` varchar(80) NOT NULL,
	`budget_range` varchar(60),
	`message` text NOT NULL,
	`source` varchar(80) DEFAULT 'landing',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
DROP TABLE `users`;