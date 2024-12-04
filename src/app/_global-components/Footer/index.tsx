import React from 'react';
import s from './footer.module.scss';
import cn from 'clsx';
import Link from 'next/link';
import { FacebookIcon, LinkedInIcon, MessageBoxIcon, TwitterIcon } from '../icons';
import JoinNewsletterForm from './JoinNewsletterForm';

function Footer() {
    return (
        <div className={cn(s.wrapper)}>
            <section className={cn('layout-block-inner', s.contentContainer)}>
                <div className={s.content}>
                    <div className={s.newsletter}>
                        <div>
                            <h3>Be the first to get news</h3>
                            <p>Subscribe to our newsletter</p>
                        </div>
                        <JoinNewsletterForm />
                    </div>

                    <div className={s.navLinks}>
                        <div>
                            <Link href='#'>FAQs</Link>
                            <Link href='/legal-center/terms-of-service'>Terms of service</Link>
                            <Link href='/legal-center/community-guidelines'>Community guidelines</Link>
                            <Link href='/legal-center/privacy-policy'>Privacy policy</Link>

                        </div>
                        <div>
                            <Link href='/how-it-works'>How it works</Link>
                            <Link href='/for-celebrities'>For celebrities</Link>
                            <Link href='/openings'>Job openings</Link>
                            <Link href='/join-the-team'>Team</Link>
                            <Link href='/legal-center'>Help</Link>
                        </div>
                    </div>

                    <div className={s.socials}>
                        <span>
                            <FacebookIcon />
                        </span>
                        <span>
                            <TwitterIcon />
                        </span>
                        <span>
                            <LinkedInIcon />
                        </span>
                        <span>
                            <MessageBoxIcon />
                        </span>
                    </div>
                </div>
            </section>
            <section className={cn('layout-block-inner', s.copyright)}>
                <p> &copy;  2022 - {new Date().getFullYear()}, StarzFi app, Vomoz Technologies </p>
            </section>

        </div>
    )
}

export default Footer;