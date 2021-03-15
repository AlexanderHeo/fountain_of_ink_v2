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
1	Pilot
2	Sailor
3	Lamy
4	Faber-Castell
5	Moonman
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
-- Data for Name: sales; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.sales ("salesId", name) FROM stdin;
1	arrival
2	staffpick
3	popular
4	beginner
5	mid
6	high
\.


--
-- Data for Name: accessories; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.accessories (id, name, "brandId", type, "categoryId", "salesId", price) FROM stdin;
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
-- Data for Name: homepage; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.homepage (category, arrival, staff, popular) FROM stdin;
\.


--
-- Data for Name: inks; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.inks ("inkId", name, "brandId", color, style, type, "categoryId", "salesId", price) FROM stdin;
\.


--
-- Data for Name: paper; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.paper ("paperId", name, "brandId", type, "categoryId", "salesId", price) FROM stdin;
\.


--
-- Data for Name: pens; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.pens ("penId", name, "brandId", colors, "categoryId", "salesId", price) FROM stdin;
7	Vanishing Point	1	1,2,3,4,5,6,7,8,9,10,11,12	1	2	160
8	Eye Dropper	5	12	1	1	20
9	Al Star	3	1,2,3,4,5,6,7,8,9,10,11,12	1	4	40
10	Metropolitan	1	1,2,3,4,5,6,7,8,9,10,11,12	1	3	35
11	Ambition	4	1,2	1	5	80
12	1911	2	1,2	1	6	200
\.


--
-- Name: accessories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.accessories_id_seq', 1, false);


--
-- Name: brand_brandId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."brand_brandId_seq"', 5, true);


--
-- Name: category_categoryId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."category_categoryId_seq"', 4, true);


--
-- Name: colors_colorId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."colors_colorId_seq"', 12, true);


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

SELECT pg_catalog.setval('public."pens_penId_seq"', 12, true);


--
-- Name: sales_salesId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."sales_salesId_seq"', 15, true);


--
-- PostgreSQL database dump complete
--

