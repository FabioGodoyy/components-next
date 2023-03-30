import * as React from 'react';

import { FooterComponent } from '@/components/footerComponent';
import { FormComponent } from '@/components/FormComponent';
import { CardComponent } from '@/components/cardComponent';
import { HeaderComponent } from '@/components/headerComponent';
import { HeroComponent } from '@/components/heroComponent';
import { CardComponent2 } from '@/components/cardComponent2';
import { CarouselComponent } from '@/components/carouselComponent';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <div className='pb-40'>
        <HeaderComponent />
        <div className=''>
          <CarouselComponent />
        </div>
        <HeroComponent />
        <FormComponent />
        <CardComponent2 />
        <CardComponent />
      </div>
      <FooterComponent />
    </>
  );
}
