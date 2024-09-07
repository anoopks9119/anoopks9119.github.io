import { ReactNode } from "react"
import * as Separator from '@radix-ui/react-separator';

interface ContainerProps {
  title: string,
  children: ReactNode,
  className?: string
}


const Container: React.FC<ContainerProps> = ({ title, children, className }) => {

  const finalClasses = "w-full md:w-3/4 mx-auto bg-white p-2 rounded-md" + ` ${className}`

  return (
    <div className={finalClasses}>
      {
        title &&
        <>
          <h3 className="text-3xl">{title}</h3>
          <Separator.Root className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" /></>
      }
      {children}
    </div>
  )

}

export default Container