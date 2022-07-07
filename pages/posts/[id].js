import {getPostById, getPosts} from '../../lib/posts';
import React from "react";
import Head from 'next/head'
import Link from 'next/link'

export default function Post(props) {

  return (
  <>
    <Head>
      <title>{props.data.data.title}</title>
      <meta content={props.data.data.body} name="description"></meta>
    </Head>
    <div>
      <Link href="/">back</Link>
    </div>
    </>
  )
}

export async function getStaticPaths() {
  const data = (await getPosts()).data
  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const data = await getPostById(params)
  return{
    props: {
      data
    }
  }
}