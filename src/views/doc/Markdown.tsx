import ReactMarkdown from "react-markdown";
import { overview } from "articles/overview"
import 'assets/styles/document.css'

export default function Markdown(documentLink: string) {
    const displayDocument = (documentIndex: string) => {
      switch (documentIndex) {
        default:
          return overview
      }
    }

    return (
      <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <ReactMarkdown>{displayDocument(documentLink)}</ReactMarkdown>
        </div>
      </div>
    </>
    )
}
