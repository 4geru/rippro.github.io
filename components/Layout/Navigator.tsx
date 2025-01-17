/** @format */

import { VFC } from 'react'
import Link from 'next/link'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import styles from './Navigator.module.css'

const Navigator: VFC = () => {
  return (
    <Stack spacing={1} direction="row">
      <Link href="/">
        <Button variant="text" className={styles.navibutton}>
          Top
        </Button>
      </Link>
      <Link href="/welcome">
        <Button variant="text" className={`${styles.welcome} ${styles.navibutton}`}>
          新歓情報
        </Button>
      </Link>
      <Link href="/event">
        <Button variant="text" className={styles.navibutton}>
          Event
        </Button>
      </Link>
      <Link href="/contact">
        <Button variant="text" className={styles.navibutton}>
          Contact
        </Button>
      </Link>
      <Link href="/links">
        <Button variant="text" className={styles.navibutton}>
          Links
        </Button>
      </Link>
      <Link href="/menbers">
        <Button variant="text" className={styles.navibutton}>
          部員向け
        </Button>
      </Link>
    </Stack>
  )
}

export default Navigator
