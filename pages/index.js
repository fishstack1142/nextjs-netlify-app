import Link from 'next/link'

export default function Home() {
  return (

    <h6>new version 15.14</h6>
    <ul>
      <li>
        <Link href="/b" as="/a">
          <a>a</a>
        </Link>
      </li>
      <li>
        <Link href="/a" as="/b">
          <a>b</a>
        </Link>
      </li>
    </ul>
  )
}
