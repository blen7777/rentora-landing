ALTER TABLE `contact_messages` ADD `name` varchar(150) NOT NULL;--> statement-breakpoint
ALTER TABLE `contact_messages` DROP COLUMN `full_name`;--> statement-breakpoint
ALTER TABLE `contact_messages` DROP COLUMN `company`;--> statement-breakpoint
ALTER TABLE `contact_messages` DROP COLUMN `service`;--> statement-breakpoint
ALTER TABLE `contact_messages` DROP COLUMN `budget_range`;--> statement-breakpoint
ALTER TABLE `contact_messages` DROP COLUMN `source`;