ALTER TABLE "pens" DROP CONSTRAINT IF EXISTS "pens_fk0";

ALTER TABLE "pens" DROP CONSTRAINT IF EXISTS "pens_fk1";

ALTER TABLE "pens" DROP CONSTRAINT IF EXISTS "pens_fk2";

ALTER TABLE "pens" DROP CONSTRAINT IF EXISTS "pens_fk3";

ALTER TABLE "pens" DROP CONSTRAINT IF EXISTS "pens_fk4";

ALTER TABLE "inks" DROP CONSTRAINT IF EXISTS "inks_fk0";

ALTER TABLE "inks" DROP CONSTRAINT IF EXISTS "inks_fk1";

ALTER TABLE "inks" DROP CONSTRAINT IF EXISTS "inks_fk2";

ALTER TABLE "inks" DROP CONSTRAINT IF EXISTS "inks_fk3";

ALTER TABLE "inks" DROP CONSTRAINT IF EXISTS "inks_fk4";

ALTER TABLE "paper" DROP CONSTRAINT IF EXISTS "paper_fk0";

ALTER TABLE "paper" DROP CONSTRAINT IF EXISTS "paper_fk1";

ALTER TABLE "paper" DROP CONSTRAINT IF EXISTS "paper_fk2";

ALTER TABLE "paper" DROP CONSTRAINT IF EXISTS "paper_fk3";

ALTER TABLE "accessories" DROP CONSTRAINT IF EXISTS "accessories_fk0";

ALTER TABLE "accessories" DROP CONSTRAINT IF EXISTS "accessories_fk1";

ALTER TABLE "accessories" DROP CONSTRAINT IF EXISTS "accessories_fk2";

ALTER TABLE "accessories" DROP CONSTRAINT IF EXISTS "accessories_fk3";

DROP TABLE IF EXISTS "pens";

DROP TABLE IF EXISTS "inks";

DROP TABLE IF EXISTS "paper";

DROP TABLE IF EXISTS "accessories";

DROP TABLE IF EXISTS "category";

DROP TABLE IF EXISTS "colors";

DROP TABLE IF EXISTS "homepage";

DROP TABLE IF EXISTS "brand";

DROP TABLE IF EXISTS "type";

CREATE TABLE "pens" (
	"penId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brand" int NOT NULL,
	"colors" int NOT NULL,
	"category" int NOT NULL,
	"homepage" int NOT NULL,
	"price" int NOT NULL,
	"type" int NOT NULL,
	CONSTRAINT "pens_pk" PRIMARY KEY ("penId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "inks" (
	"inkId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brand" int NOT NULL,
	"color" int NOT NULL,
	"type" int NOT NULL,
	"category" int NOT NULL,
	"homepage" int NOT NULL,
	"price" int NOT NULL,
	CONSTRAINT "inks_pk" PRIMARY KEY ("inkId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "paper" (
	"paperId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brand" int NOT NULL,
	"type" int NOT NULL,
	"category" int NOT NULL,
	"homepage" int NOT NULL,
	"price" int NOT NULL,
	CONSTRAINT "paper_pk" PRIMARY KEY ("paperId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "accessories" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brand" int NOT NULL,
	"type" int NOT NULL,
	"category" int NOT NULL,
	"homepage" int NOT NULL,
	"price" int NOT NULL,
	CONSTRAINT "accessories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "category" (
	"categoryId" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "category_pk" PRIMARY KEY ("categoryId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "colors" (
	"colorId" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "colors_pk" PRIMARY KEY ("colorId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "homepage" (
	"homepageId" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "homepage_pk" PRIMARY KEY ("homepageId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "brand" (
	"brandId" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "brand_pk" PRIMARY KEY ("brandId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "type" (
	"typeId" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "type_pk" PRIMARY KEY ("typeId")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "pens" ADD CONSTRAINT "pens_fk0" FOREIGN KEY ("brand") REFERENCES "brand"("brandId");
ALTER TABLE "pens" ADD CONSTRAINT "pens_fk1" FOREIGN KEY ("colors") REFERENCES "colors"("colorId");
ALTER TABLE "pens" ADD CONSTRAINT "pens_fk2" FOREIGN KEY ("category") REFERENCES "category"("categoryId");
ALTER TABLE "pens" ADD CONSTRAINT "pens_fk3" FOREIGN KEY ("homepage") REFERENCES "homepage"("homepageId");
ALTER TABLE "pens" ADD CONSTRAINT "pens_fk4" FOREIGN KEY ("type") REFERENCES "type"("typeId");

ALTER TABLE "inks" ADD CONSTRAINT "inks_fk0" FOREIGN KEY ("brand") REFERENCES "brand"("brandId");
ALTER TABLE "inks" ADD CONSTRAINT "inks_fk1" FOREIGN KEY ("color") REFERENCES "colors"("colorId");
ALTER TABLE "inks" ADD CONSTRAINT "inks_fk2" FOREIGN KEY ("type") REFERENCES "type"("typeId");
ALTER TABLE "inks" ADD CONSTRAINT "inks_fk3" FOREIGN KEY ("category") REFERENCES "category"("categoryId");
ALTER TABLE "inks" ADD CONSTRAINT "inks_fk4" FOREIGN KEY ("homepage") REFERENCES "homepage"("homepageId");

ALTER TABLE "paper" ADD CONSTRAINT "paper_fk0" FOREIGN KEY ("brand") REFERENCES "brand"("brandId");
ALTER TABLE "paper" ADD CONSTRAINT "paper_fk1" FOREIGN KEY ("type") REFERENCES "type"("typeId");
ALTER TABLE "paper" ADD CONSTRAINT "paper_fk2" FOREIGN KEY ("category") REFERENCES "category"("categoryId");
ALTER TABLE "paper" ADD CONSTRAINT "paper_fk3" FOREIGN KEY ("homepage") REFERENCES "homepage"("homepageId");

ALTER TABLE "accessories" ADD CONSTRAINT "accessories_fk0" FOREIGN KEY ("brand") REFERENCES "brand"("brandId");
ALTER TABLE "accessories" ADD CONSTRAINT "accessories_fk1" FOREIGN KEY ("type") REFERENCES "type"("typeId");
ALTER TABLE "accessories" ADD CONSTRAINT "accessories_fk2" FOREIGN KEY ("category") REFERENCES "category"("categoryId");
ALTER TABLE "accessories" ADD CONSTRAINT "accessories_fk3" FOREIGN KEY ("homepage") REFERENCES "homepage"("homepageId");
