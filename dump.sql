--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: books; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.books (
    id integer NOT NULL,
    book text NOT NULL,
    "isRead" boolean NOT NULL,
    "imgBook" text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.books VALUES (8, 'sobre a brevidade da vidaaaa', false, 'https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg', '2023-01-23 01:36:04.038612');
INSERT INTO public.books VALUES (10, 'sobe a brevi', false, 'https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg', '2023-01-23 01:39:54.647791');
INSERT INTO public.books VALUES (11, 'sobe a brei', false, 'https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg', '2023-01-23 01:42:30.434104');
INSERT INTO public.books VALUES (12, 'sobe a pbrei', false, 'https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg', '2023-01-23 01:45:48.351586');
INSERT INTO public.books VALUES (13, 'sobe a pbfrei', false, 'https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg', '2023-01-23 01:46:34.702767');
INSERT INTO public.books VALUES (14, 'sobe a pbfrgei', false, 'https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg', '2023-01-23 01:50:40.859721');
INSERT INTO public.books VALUES (15, 'sobe a pbfrlgei', false, 'https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg', '2023-01-23 01:51:03.6191');
INSERT INTO public.books VALUES (16, 'sobe a pbfrplgei', false, 'https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg', '2023-01-23 01:55:11.078328');
INSERT INTO public.books VALUES (17, 'sobe a pbfrplgeki', false, 'https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg', '2023-01-23 01:55:43.50248');
INSERT INTO public.books VALUES (9, 'sobre a brevi', true, 'https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg', '2023-01-23 01:37:09.675889');
INSERT INTO public.books VALUES (18, 'sobe da pbfrplgeki', false, 'https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg', '2023-01-23 09:49:36.658921');
INSERT INTO public.books VALUES (19, 'sobe da pbfxrplgeki', false, 'https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg', '2023-01-23 09:54:00.039012');
INSERT INTO public.books VALUES (2, 'sobre a brevidade da vida', true, 'https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg', '2023-01-19 14:28:25.851549');


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.books_id_seq', 19, true);


--
-- Name: books books_book_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_book_key UNIQUE (book);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

