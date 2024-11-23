'use client'

import { ShieldAlert, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlockedNotice() {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex justify-center">
          <ShieldAlert size={96} className="text-red-500" />
        </div>
        <CardTitle className="text-2xl font-bold text-center">Access Blocked</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center text-gray-600">
          The website you are trying to access has been blocked by your home network admin.
        </p>
        <div className="flex items-center justify-center text-yellow-600 bg-yellow-50 p-3 rounded-md">
          <AlertTriangle size={20} className="mr-2 flex-shrink-0" />
          <p className="text-sm">If you believe this is a mistake, please contact your system administrator.</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={() => window.history.back()}
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Go Back
        </Button>
      </CardFooter>
    </Card>
  )
}

