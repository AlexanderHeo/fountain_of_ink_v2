CREATE TABLE "pens" (
	"penId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brand" TEXT NOT NULL,
	"colors" char NOT NULL,
	"category" char NOT NULL,
	"sale" char NOT NULL,
	"price" int NOT NULL,
	CONSTRAINT "pens_pk" PRIMARY KEY ("penId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "inks" (
	"inkId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brand" TEXT NOT NULL,
	"color" TEXT NOT NULL,
	"style" TEXT NOT NULL,
	"type" TEXT NOT NULL,
	"category" TEXT NOT NULL,
	"sale" TEXT NOT NULL,
	"price" int NOT NULL,
	CONSTRAINT "inks_pk" PRIMARY KEY ("inkId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "paper" (
	"paperId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brand" TEXT NOT NULL,
	"type" TEXT NOT NULL,
	"category" TEXT NOT NULL,
	"sale" TEXT NOT NULL,
	"price" int NOT NULL,
	CONSTRAINT "paper_pk" PRIMARY KEY ("paperId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "accessories" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brand" TEXT NOT NULL,
	"type" TEXT NOT NULL,
	"category" TEXT NOT NULL,
	"sale" TEXT NOT NULL,
	"price" int NOT NULL,
	CONSTRAINT "accessories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);







