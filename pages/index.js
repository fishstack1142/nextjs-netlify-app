import Link from 'next/link'

export default function Home() {
  return (
    <div>
        <h6>version 17.04</h6>
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
    </div>
  )
}
