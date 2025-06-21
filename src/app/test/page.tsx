"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { getMainRes} from '../../../helper';

const Footer = () => {
      const [header, setHeader] = useState<any>(null)
      const [loading, setLoading] = useState(true)
    
      useEffect(() => {
        const fetchHeader = async () => {
          try {
            const data = await getMainRes()
            setHeader(data.block[3].paymentgrid)
          } catch (err) {
            console.error('Failed to fetch header data:', err)
          } finally {
            setLoading(false)
          }
        }
    
        fetchHeader()
      }, [])
  return (
    <>
        <div className="text-xl font-bold">LMS</div>

        {/* DEBUG view */}
        <div className="text-xs text-gray-500">
          {header ? (
              <pre className="whitespace-pre-wrap">{JSON.stringify(header, null, 2)}</pre>
            ) : (
                "Loading header..."
            )}
        </div>
            </>
  )
}

export default Footer