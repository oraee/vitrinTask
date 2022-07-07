import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {getPosts} from "../lib/posts"
import React from "react"
import Table from "@mui/material/Table"
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"
import TableRow from "@mui/material/TableRow"
import TableHead from "@mui/material/TableHead"
import TableCell from "@mui/material/TableCell"
import TableBody from "@mui/material/TableBody"
import Link from 'next/link'
import {Button} from "@mui/material"

export default function Home(props) {

  const posts = props.posts.data

  return (
    <div className={styles.container}>
      <Head>
        <title>home page</title>
      </Head>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>title</TableCell>
              <TableCell>user id</TableCell>
              <TableCell>id</TableCell>
              <TableCell>more</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((row) => (
              <TableRow
                key={row.id}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <Button>
                    <Link href={`/posts/${row.id}`}>
                      more
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()
  return {
    props: {
      posts
    }
  }
}