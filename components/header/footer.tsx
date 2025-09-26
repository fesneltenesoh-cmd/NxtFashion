'use client'

import React from 'react'
import { ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'
import { t } from 'i18next'

export default function Footer() {
  return (
    <footer className='bg-black text-white'>
        <div className="w-[100px] rounded-full text-center items-center justify-center">
            <Button className='flex absolute md:max-w-[35px] bg-grey-800/50 md:left-[97%] ' variant='ghost' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <ChevronUp className='m-2'/>
            </Button>
        </div>
        <div className="p-4">
            <div className="flex justify-center gap-3 text-sm">
                <Link href='/page/conditions-of-use'>
                  {t('Footer.Conditions of Use')}
                </Link>
                <Link href='/page/privacy-policy'>{t('Footer.Privacy Notice')}</Link>
                <Link href='/page/help'>{t('Footer.Help')}</Link>
            </div>
            <div className='flex justify-center text-sm'>
              <p> © 2023-2025, {APP_NAME}, Inc. or its affiliates</p>
            </div>
            <div className='mt-8 flex justify-center text-sm text-gray-400'>
              Mabanda, Bonaberi, Douala | +237 653 164 228
            </div>
        </div>
    </footer>
  )
}