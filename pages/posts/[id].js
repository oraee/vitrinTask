import {getPostById, getPosts} from '../../lib/posts'
import React from "react"
import Head from 'next/head'
import Link from 'next/link'
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import {Button} from "@mui/material"
import Box from "@mui/material/Box"

export default function Post(props) {

  const post = props.post.data

  return (
  <>
    <Head>
      <title>{post.title}</title>
      <meta content={post.body} name="description"></meta>
    </Head>
      <Box m={30} mt={10}>
        <Paper>
          <Box p={4}>
          <Typography align='center' variant="h5" component="h3">
            {post.title}
          </Typography>
          </Box>
          <Typography align='center' component="p">
            {post.body}
          </Typography>
          <Typography align='center' component="p">
            id : {post.id}
          </Typography>
          <Typography align='center' component="p">
            user id : {post.userId}
          </Typography>
          <Button><Link href="/">back</Link></Button>
        </Paper>
      </Box>
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
  const post = await getPostById(params)
  return{
    props: {
      post
    }
  }
}