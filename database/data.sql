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
-- Data for Name: brand; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.brand ("brandId", name) FROM stdin;
\.


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.category ("categoryId", name) FROM stdin;
1	pens
2	inks
3	paper
4	accessories
\.


--
-- Data for Name: homepage; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.homepage ("homepageId", name) FROM stdin;
1	arrival
2	staffpick
3	popular
\.


--
-- Data for Name: type; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.type ("typeId", name) FROM stdin;
1	demonstrator
2	flex
3	stub
4	limited
5	beginners
6	novice
7	advance
8	unique
9	bottles
10	cartridges
11	samples
12	swatches
13	shading
14	sheening
15	shimmering
16	waterresistant
17	notebook
18	notebpad
19	tablet
20	paperaccessories
21	converters
22	nibs
23	cleaning
24	tuning
25	blotters
26	inkwells
27	penfilling
28	storage
\.


--
-- Data for Name: accessories; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.accessories (id, name, brand, type, category, homepage, price) FROM stdin;
\.


--
-- Data for Name: colors; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.colors ("colorId", name) FROM stdin;
1	black
2	blue
3	brown
4	green
5	gray
6	orange
7	pink
8	purple
9	red
10	turqoise
11	yellow
12	white
\.


--
-- Data for Name: inks; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.inks ("inkId", name, brand, color, type, category, homepage, price) FROM stdin;
\.


--
-- Data for Name: paper; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.paper ("paperId", name, brand, type, category, homepage, price) FROM stdin;
\.


--
-- Data for Name: pens; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.pens ("penId", name, brand, colors, category, homepage, price, type) FROM stdin;
\.


--
-- Name: accessories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.accessories_id_seq', 1, false);


--
-- Name: brand_brandId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."brand_brandId_seq"', 1, false);


--
-- Name: category_categoryId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."category_categoryId_seq"', 4, true);


--
-- Name: colors_colorId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."colors_colorId_seq"', 12, true);


--
-- Name: homepage_homepageId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."homepage_homepageId_seq"', 3, true);


--
-- Name: inks_inkId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."inks_inkId_seq"', 1, false);


--
-- Name: paper_paperId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."paper_paperId_seq"', 1, false);


--
-- Name: pens_penId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."pens_penId_seq"', 1, false);


--
-- Name: type_typeId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."type_typeId_seq"', 28, true);


--
-- PostgreSQL database dump complete
--

