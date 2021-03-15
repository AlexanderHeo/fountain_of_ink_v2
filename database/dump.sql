ALTER TABLE "pens" DROP CONSTRAINT IF EXISTS "pens_fk0";

ALTER TABLE "pens" DROP CONSTRAINT IF EXISTS "pens_fk1";

ALTER TABLE "pens" DROP CONSTRAINT IF EXISTS "pens_fk2";

ALTER TABLE "inks" DROP CONSTRAINT IF EXISTS "inks_fk0";

ALTER TABLE "inks" DROP CONSTRAINT IF EXISTS "inks_fk1";

ALTER TABLE "inks" DROP CONSTRAINT IF EXISTS "inks_fk2";

ALTER TABLE "paper" DROP CONSTRAINT IF EXISTS "paper_fk0";

ALTER TABLE "paper" DROP CONSTRAINT IF EXISTS "paper_fk1";

ALTER TABLE "paper" DROP CONSTRAINT IF EXISTS "paper_fk2";

ALTER TABLE "accessories" DROP CONSTRAINT IF EXISTS "accessories_fk0";

ALTER TABLE "accessories" DROP CONSTRAINT IF EXISTS "accessories_fk1";

ALTER TABLE "accessories" DROP CONSTRAINT IF EXISTS "accessories_fk2";

DROP TABLE IF EXISTS "pens";

DROP TABLE IF EXISTS "inks";

DROP TABLE IF EXISTS "paper";

DROP TABLE IF EXISTS "accessories";

DROP TABLE IF EXISTS "category";

DROP TABLE IF EXISTS "colors";

DROP TABLE IF EXISTS "sales";

DROP TABLE IF EXISTS "brand";

CREATE TABLE "pens" (
	"penId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brandId" int NOT NULL,
	"colors" TEXT NOT NULL,
	"categoryId" int NOT NULL,
	"salesId" int NOT NULL,
	"price" int NOT NULL,
	CONSTRAINT "pens_pk" PRIMARY KEY ("penId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "inks" (
	"inkId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brandId" int NOT NULL,
	"color" TEXT NOT NULL,
	"style" TEXT NOT NULL,
	"type" TEXT NOT NULL,
	"categoryId" int NOT NULL,
	"salesId" int NOT NULL,
	"price" int NOT NULL,
	CONSTRAINT "inks_pk" PRIMARY KEY ("inkId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "paper" (
	"paperId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brandId" int NOT NULL,
	"type" TEXT NOT NULL,
	"categoryId" int NOT NULL,
	"salesId" int NOT NULL,
	"price" int NOT NULL,
	CONSTRAINT "paper_pk" PRIMARY KEY ("paperId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "accessories" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brandId" int NOT NULL,
	"type" TEXT NOT NULL,
	"categoryId" int NOT NULL,
	"salesId" int NOT NULL,
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



CREATE TABLE "sales" (
	"salesId" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "sales_pk" PRIMARY KEY ("salesId")
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



ALTER TABLE "pens" ADD CONSTRAINT "pens_fk0" FOREIGN KEY ("brandId") REFERENCES "brand"("brandId");
ALTER TABLE "pens" ADD CONSTRAINT "pens_fk1" FOREIGN KEY ("categoryId") REFERENCES "category"("categoryId");
ALTER TABLE "pens" ADD CONSTRAINT "pens_fk2" FOREIGN KEY ("salesId") REFERENCES "sales"("salesId");

ALTER TABLE "inks" ADD CONSTRAINT "inks_fk0" FOREIGN KEY ("brandId") REFERENCES "brand"("brandId");
ALTER TABLE "inks" ADD CONSTRAINT "inks_fk1" FOREIGN KEY ("categoryId") REFERENCES "category"("categoryId");
ALTER TABLE "inks" ADD CONSTRAINT "inks_fk2" FOREIGN KEY ("salesId") REFERENCES "sales"("salesId");

ALTER TABLE "paper" ADD CONSTRAINT "paper_fk0" FOREIGN KEY ("brandId") REFERENCES "brand"("brandId");
ALTER TABLE "paper" ADD CONSTRAINT "paper_fk1" FOREIGN KEY ("categoryId") REFERENCES "category"("categoryId");
ALTER TABLE "paper" ADD CONSTRAINT "paper_fk2" FOREIGN KEY ("salesId") REFERENCES "sales"("salesId");

ALTER TABLE "accessories" ADD CONSTRAINT "accessories_fk0" FOREIGN KEY ("brandId") REFERENCES "brand"("brandId");
ALTER TABLE "accessories" ADD CONSTRAINT "accessories_fk1" FOREIGN KEY ("categoryId") REFERENCES "category"("categoryId");
ALTER TABLE "accessories" ADD CONSTRAINT "accessories_fk2" FOREIGN KEY ("salesId") REFERENCES "sales"("salesId");
