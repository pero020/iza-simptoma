import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="home-title text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Najnovije
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <div className="border-primary-500 mt-4 rounded-lg border-l-4 bg-gray-50 px-6 py-4 text-base leading-7 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            <p>
              Dobrodošli u svijet naizgled običnih zdravstvenih simptoma koji vode u nadrealne i
              fantastične scenarije. Naše priče počinju svakodnevnim brigama, a završavaju u
              svjetovima znanstvene fantastike i fantazije.
            </p>
            <p className="mt-2">
              <strong className="text-primary-500">Napomena:</strong> Sve priče su fikcija i služe
              kao kreativni odmak od pretjeranog "googlanja" simptoma. Za stvarne zdravstvene
              savjete, uvijek se obratite liječniku.
            </p>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'Trenutno nema priča.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article className="-mx-4 rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Objavljeno</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Pročitaj više: "${title}"`}
                        >
                          Pročitaj više &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Sve priče"
          >
            Sve priče &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}

      <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">O konceptu</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            <strong className="text-scifi-purple">Iza Simptoma</strong> istražuje svijet gdje se
            naizgled obični zdravstveni simptomi pretvaraju u vrata prema fantastičnim iskustvima i
            alternativnim stvarnostima.
          </p>
          <p>
            Naše priče počinju kao realistični opisi zdravstvenih simptoma, ali se postepeno
            razvijaju u neočekivane, nadrealne smjerove — od komunikacije s vanzemaljcima preko
            putovanja kroz vrijeme do otkrivanja paralelnih dimenzija.
          </p>
          <p>
            Cilj nam je osvijestiti kako prekomjerno istraživanje simptoma na internetu može voditi
            u nepotrebnu zabrinutost, ali na kreativan i zabavan način, kroz spoj medicine i mašte.
          </p>
        </div>
      </div>
    </>
  )
}
