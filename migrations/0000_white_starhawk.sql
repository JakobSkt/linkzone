CREATE TABLE `links` (
	`id` integer PRIMARY KEY NOT NULL,
	`url` text(512),
	`description` text(512),
	`zoneId` integer,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `zones` (
	`id` integer PRIMARY KEY NOT NULL,
	`intro` text(512),
	`code` text(255),
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
