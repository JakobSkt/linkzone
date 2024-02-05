CREATE TABLE `links` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`url` varchar(512),
	`description` varchar(512),
	`zoneId` int,
	`createdAt` timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `links_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `zones` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`intro` varchar(512),
	`createdAt` timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `zones_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `links` ADD CONSTRAINT `links_zoneId_zones_id_fk` FOREIGN KEY (`zoneId`) REFERENCES `zones`(`id`) ON DELETE no action ON UPDATE no action;