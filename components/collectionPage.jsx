import Link from 'next/link'
import { useRouter } from 'next/router'
import { getPagesUnderRoute } from 'nextra/context'
import filterRouteLocale from 'nextra/filter-route-locale'
import styles from './counters.module.css'

export function CollectionPage({ path }) {
  const { locale, defaultLocale } = useRouter()
  let result = filterRouteLocale(
    getPagesUnderRoute(path),
    locale, defaultLocale
  ).map(page => {
      console.log(page.frontMatter?.title)
      return (
        <li key={page.route}>
          <Link className={styles.link} href={page.route}>{page.meta.title || page.frontMatter?.title || page.name}</Link>
        </li>
       )
    })
    return (
        <ol className={styles.myList}>
            {result}
        </ol>
    )
}
