CREATE TABLE `users` (
	`id` varchar(36) NOT NULL,
	`email` varchar(255) NOT NULL,
	`nationality` varchar(100) NOT NULL,
	`referral_code` varchar(8) NOT NULL,
	`referred_by` varchar(8),
	`position` int NOT NULL,
	`wallet_address` varchar(255),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`),
	CONSTRAINT `users_referral_code_unique` UNIQUE(`referral_code`)
);
