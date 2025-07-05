"use client"

import { useEffect, useState } from "react"

export function QRCode({ url, size = 200 }: { url: string; size?: number }) {
  const [qrCodeUrl, setQrCodeUrl] = useState("")

  useEffect(() => {
    // Generate QR code using a service like qr-server.com
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}&bgcolor=1e40af&color=ffffff`
    setQrCodeUrl(qrUrl)
  }, [url, size])

  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-lg">
      <img src={qrCodeUrl || "/placeholder.svg"} alt="QR Code" className="rounded-lg" />
      <p className="text-xs text-gray-600 text-center">Scan with camera if NFC unavailable</p>
    </div>
  )
}
