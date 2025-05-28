import Link from './Link'

export default function StoryDisclaimer() {
  return (
    <div className="disclaimer-wrapper mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
      <blockquote className="disclaimer-content">
        <p>
          <span role="img" aria-label="Upozorenje">⚠️</span>{' '}
          <strong>Napomena:</strong> Ova priča je <strong>fikcija</strong> i služi kao dio zbirke kreativnih 
          tekstova koji počinju s uobičajenim simptomima, a završavaju u nadrealnim okolnostima te 
          pokušavaju osvjestiti koliko štetno za psihu može biti traženje simptoma na internetu.
        </p>
        <p>
          Ovo nije medicinski savjet. Ako imate bilo kakve zdravstvene tegobe, <strong>obavezno se obratite 
          svom liječniku</strong> ili potražite informacije iz pouzdanih izvora:
        </p>
        <ul>
          <li>
            <Link href="https://www.hzjz.hr">HZJZ – Hrvatski zavod za javno zdravstvo</Link>
          </li>
          <li>
            <Link href="https://www.mayoclinic.org">Mayo Clinic – Symptoms A–Z</Link>
          </li>
          <li>
            <Link href="https://www.webmd.com">WebMD – Symptom Checker</Link>
          </li>
        </ul>
        <p>
          Ne vjerujte svemu što pročitate na internetu – uključujući i ovu priču. 😉
        </p>
      </blockquote>
    </div>
  )
}