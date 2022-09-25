import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

const Markdown = ({ children }: {children: string}) => {

  const test = (blah: any): any => {
    return test
  }

  return (
    <ReactMarkdown 
      children={children}
      remarkPlugins={[remarkGfm, remarkBreaks]}
      components={{
        h1: ({node, ...props}: any): any => <p className="text-3xl font-bold" {...props} />,
        h2: ({node, ...props}) => <p className="text-2xl font-medium" {...props} />,
        h3: ({node, ...props}) => <p className="text-xl font-medium" {...props} />,
        h4: ({node, ...props}) => <p className="text-lg font-medium" {...props} />,
        h5: ({node, ...props}) => <p className="font-medium" {...props} />,
        a: ({node, ...props}) => <a className="text-yellow-600 underline" {...props} />,
        ol: ({node, ...props}) => <ol className="list-decimal list-inside" {...props} />,
        ul: ({node, ...props}) => <ul className="list-disc list-inside" {...props} />,
      }}
    />
  )
}

export default Markdown