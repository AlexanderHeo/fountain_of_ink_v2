--
-- PostgreSQL database dump
--

-- Dumped from database version 10.15 (Ubuntu 10.15-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.15 (Ubuntu 10.15-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: accessories; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.accessories (
    id integer NOT NULL,
    name text NOT NULL,
    brand integer NOT NULL,
    type integer NOT NULL,
    category integer NOT NULL,
    homepage integer NOT NULL,
    price integer NOT NULL
);


ALTER TABLE public.accessories OWNER TO dev;

--
-- Name: accessories_id_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public.accessories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accessories_id_seq OWNER TO dev;

--
-- Name: accessories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public.accessories_id_seq OWNED BY public.accessories.id;


--
-- Name: brand; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.brand (
    "brandId" integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.brand OWNER TO dev;

--
-- Name: brand_brandId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."brand_brandId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."brand_brandId_seq" OWNER TO dev;

--
-- Name: brand_brandId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."brand_brandId_seq" OWNED BY public.brand."brandId";


--
-- Name: category; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.category (
    "categoryId" integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.category OWNER TO dev;

--
-- Name: category_categoryId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."category_categoryId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."category_categoryId_seq" OWNER TO dev;

--
-- Name: category_categoryId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."category_categoryId_seq" OWNED BY public.category."categoryId";


--
-- Name: colors; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.colors (
    "colorId" integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.colors OWNER TO dev;

--
-- Name: colors_colorId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."colors_colorId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."colors_colorId_seq" OWNER TO dev;

--
-- Name: colors_colorId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."colors_colorId_seq" OWNED BY public.colors."colorId";


--
-- Name: homepage; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.homepage (
    "homepageId" integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.homepage OWNER TO dev;

--
-- Name: homepage_homepageId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."homepage_homepageId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."homepage_homepageId_seq" OWNER TO dev;

--
-- Name: homepage_homepageId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."homepage_homepageId_seq" OWNED BY public.homepage."homepageId";


--
-- Name: inks; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.inks (
    "inkId" integer NOT NULL,
    name text NOT NULL,
    brand integer NOT NULL,
    color integer NOT NULL,
    type integer NOT NULL,
    category integer NOT NULL,
    homepage integer NOT NULL,
    price integer NOT NULL
);


ALTER TABLE public.inks OWNER TO dev;

--
-- Name: inks_inkId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."inks_inkId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."inks_inkId_seq" OWNER TO dev;

--
-- Name: inks_inkId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."inks_inkId_seq" OWNED BY public.inks."inkId";


--
-- Name: paper; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.paper (
    "paperId" integer NOT NULL,
    name text NOT NULL,
    brand integer NOT NULL,
    type integer NOT NULL,
    category integer NOT NULL,
    homepage integer NOT NULL,
    price integer NOT NULL
);


ALTER TABLE public.paper OWNER TO dev;

--
-- Name: paper_paperId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."paper_paperId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."paper_paperId_seq" OWNER TO dev;

--
-- Name: paper_paperId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."paper_paperId_seq" OWNED BY public.paper."paperId";


--
-- Name: pens; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.pens (
    "penId" integer NOT NULL,
    name text NOT NULL,
    brand integer NOT NULL,
    colors integer NOT NULL,
    category integer NOT NULL,
    homepage integer NOT NULL,
    price integer NOT NULL,
    type integer NOT NULL
);


ALTER TABLE public.pens OWNER TO dev;

--
-- Name: pens_penId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."pens_penId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."pens_penId_seq" OWNER TO dev;

--
-- Name: pens_penId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."pens_penId_seq" OWNED BY public.pens."penId";


--
-- Name: type; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.type (
    "typeId" integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.type OWNER TO dev;

--
-- Name: type_typeId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."type_typeId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."type_typeId_seq" OWNER TO dev;

--
-- Name: type_typeId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."type_typeId_seq" OWNED BY public.type."typeId";


--
-- Name: accessories id; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.accessories ALTER COLUMN id SET DEFAULT nextval('public.accessories_id_seq'::regclass);


--
-- Name: brand brandId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.brand ALTER COLUMN "brandId" SET DEFAULT nextval('public."brand_brandId_seq"'::regclass);


--
-- Name: category categoryId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.category ALTER COLUMN "categoryId" SET DEFAULT nextval('public."category_categoryId_seq"'::regclass);


--
-- Name: colors colorId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.colors ALTER COLUMN "colorId" SET DEFAULT nextval('public."colors_colorId_seq"'::regclass);


--
-- Name: homepage homepageId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.homepage ALTER COLUMN "homepageId" SET DEFAULT nextval('public."homepage_homepageId_seq"'::regclass);


--
-- Name: inks inkId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.inks ALTER COLUMN "inkId" SET DEFAULT nextval('public."inks_inkId_seq"'::regclass);


--
-- Name: paper paperId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.paper ALTER COLUMN "paperId" SET DEFAULT nextval('public."paper_paperId_seq"'::regclass);


--
-- Name: pens penId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.pens ALTER COLUMN "penId" SET DEFAULT nextval('public."pens_penId_seq"'::regclass);


--
-- Name: type typeId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.type ALTER COLUMN "typeId" SET DEFAULT nextval('public."type_typeId_seq"'::regclass);


--
-- Name: accessories accessories_pk; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.accessories
    ADD CONSTRAINT accessories_pk PRIMARY KEY (id);


--
-- Name: brand brand_pk; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.brand
    ADD CONSTRAINT brand_pk PRIMARY KEY ("brandId");


--
-- Name: category category_pk; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pk PRIMARY KEY ("categoryId");


--
-- Name: colors colors_pk; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.colors
    ADD CONSTRAINT colors_pk PRIMARY KEY ("colorId");


--
-- Name: homepage homepage_pk; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.homepage
    ADD CONSTRAINT homepage_pk PRIMARY KEY ("homepageId");


--
-- Name: inks inks_pk; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.inks
    ADD CONSTRAINT inks_pk PRIMARY KEY ("inkId");


--
-- Name: paper paper_pk; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.paper
    ADD CONSTRAINT paper_pk PRIMARY KEY ("paperId");


--
-- Name: pens pens_pk; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.pens
    ADD CONSTRAINT pens_pk PRIMARY KEY ("penId");


--
-- Name: type type_pk; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.type
    ADD CONSTRAINT type_pk PRIMARY KEY ("typeId");


--
-- Name: accessories accessories_fk0; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.accessories
    ADD CONSTRAINT accessories_fk0 FOREIGN KEY (brand) REFERENCES public.brand("brandId");


--
-- Name: accessories accessories_fk1; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.accessories
    ADD CONSTRAINT accessories_fk1 FOREIGN KEY (type) REFERENCES public.type("typeId");


--
-- Name: accessories accessories_fk2; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.accessories
    ADD CONSTRAINT accessories_fk2 FOREIGN KEY (category) REFERENCES public.category("categoryId");


--
-- Name: accessories accessories_fk3; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.accessories
    ADD CONSTRAINT accessories_fk3 FOREIGN KEY (homepage) REFERENCES public.homepage("homepageId");


--
-- Name: inks inks_fk0; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.inks
    ADD CONSTRAINT inks_fk0 FOREIGN KEY (brand) REFERENCES public.brand("brandId");


--
-- Name: inks inks_fk1; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.inks
    ADD CONSTRAINT inks_fk1 FOREIGN KEY (color) REFERENCES public.colors("colorId");


--
-- Name: inks inks_fk2; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.inks
    ADD CONSTRAINT inks_fk2 FOREIGN KEY (type) REFERENCES public.type("typeId");


--
-- Name: inks inks_fk3; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.inks
    ADD CONSTRAINT inks_fk3 FOREIGN KEY (category) REFERENCES public.category("categoryId");


--
-- Name: inks inks_fk4; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.inks
    ADD CONSTRAINT inks_fk4 FOREIGN KEY (homepage) REFERENCES public.homepage("homepageId");


--
-- Name: paper paper_fk0; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.paper
    ADD CONSTRAINT paper_fk0 FOREIGN KEY (brand) REFERENCES public.brand("brandId");


--
-- Name: paper paper_fk1; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.paper
    ADD CONSTRAINT paper_fk1 FOREIGN KEY (type) REFERENCES public.type("typeId");


--
-- Name: paper paper_fk2; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.paper
    ADD CONSTRAINT paper_fk2 FOREIGN KEY (category) REFERENCES public.category("categoryId");


--
-- Name: paper paper_fk3; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.paper
    ADD CONSTRAINT paper_fk3 FOREIGN KEY (homepage) REFERENCES public.homepage("homepageId");


--
-- Name: pens pens_fk0; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.pens
    ADD CONSTRAINT pens_fk0 FOREIGN KEY (brand) REFERENCES public.brand("brandId");


--
-- Name: pens pens_fk1; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.pens
    ADD CONSTRAINT pens_fk1 FOREIGN KEY (colors) REFERENCES public.colors("colorId");


--
-- Name: pens pens_fk2; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.pens
    ADD CONSTRAINT pens_fk2 FOREIGN KEY (category) REFERENCES public.category("categoryId");


--
-- Name: pens pens_fk3; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.pens
    ADD CONSTRAINT pens_fk3 FOREIGN KEY (homepage) REFERENCES public.homepage("homepageId");


--
-- Name: pens pens_fk4; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.pens
    ADD CONSTRAINT pens_fk4 FOREIGN KEY (type) REFERENCES public.type("typeId");


--
-- PostgreSQL database dump complete
--

