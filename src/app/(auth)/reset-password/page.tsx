import { Suspense } from "react"
import ResetPasswordClient from "@/components/Auth/ResetPasswordClient"

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const token = Array.isArray(searchParams.token)
    ? searchParams.token[0]
    : searchParams.token

  return (
    <Suspense fallback={<div>Loading reset form...</div>}>
      <ResetPasswordClient token={token} />
    </Suspense>
  )
}
