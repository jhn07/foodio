import { Loader } from "lucide-react"

export const CustomLoading = ({ loading }: { loading: boolean }) => {
  return (
    <>
      {loading && (
        Array(6).fill(null).map((idx) => (
          <div key={idx} className="min-h-[250px] flex flex-col items-center justify-center">
            <Loader className="h-5 w-5 text-red-400 animate-spin" />
          </div>
        ))
      )}
    </>
  )
}
