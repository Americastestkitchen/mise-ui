import styles from './styles/myStuff.module.scss';
import Icon from './partials/Icon';
import EditorialText from '../../partials/EditorialText/EditorialText';

const content = {
  favorites: {
    ctaCopy: "Start exploring and we bet you’ll find more than a few you’ll want to save for later!",
    headline: "My Favorites",
    url: "/favorites"
  },
  personalized: [
    {
      ctaCopy: "Personalized picks based on your favorites.",
      headline: "Fresh Picks For You",
      icon: "lightning",
      url: "/favorite_collections/fresh_picks", 
      visibilityRules: ["Member", "Anon", "Registrant", "Cancelled"]
    },
    {
      ctaCopy: "Find a new exciting recipe to try today!",
      headline: "Surprise Me",
      icon: "sparkle",
      linkVariable: true,
      url: "/", //TODO: Will this be a value from BE vs. being a static url?
      visibilityRules: ["Member", "Anon", "Registrant", "Cancelled"]
    },
    {
      headline: "My Account",
      icon: "user",
      url: "/user",
      visibilityRules: ["Member"]
    },
    {
      headline: "Manage Profile",
      icon: "user",
      url: "/user", //TODO: get the URL for this profile
      visibilityRules: ["Registrant", "Cancelled"]
    }
  ],
  ctaFooter: {
    Anon: "<em>Members get these tools (and more) with All Access. <a href='#'>Try for a month!</a></em>",
    Registrant: "<em>Members get unlimited access to the full catalog (and more); <a href='#'>upgrade and see!</a></em>",
    Cancelled: "<em>Members get unlimited access to the full catalog (and more); <a href='#'>reacativate and see!</a></em>",
    Member: ""
  }
}

export type Icons = "lightning" | "save" | "user" | "sparkle"
type Auth = "Member" | "Anon" | "Registrant" | "Cancelled" //TODO: These are TBD until known values from BE

export type MyStuffProps = {
  authCode: Auth,
  // props for possible OnClick for tracking?
  // Props for Favorited recipe Object to populate the Favorites cards
}

export const MyStuff: React.FC<MyStuffProps> = ({ authCode }: MyStuffProps) => {
  const { personalized, favorites, ctaFooter } = content
  return (
    <div>
      <div className={styles.topBar}></div>
      <div className={styles.wrapper}>
        <h2 className={styles.headline}>My Stuff</h2>
        <div className={styles.favoritesWrapper}>
          <div className={styles.subHeadWrapper}>
            <Icon type="save" />
            {/* TODO: set up a variable link if favorites are present */}
            <h3 className={styles.subHeading}>{favorites.headline}</h3>
          </div>
          {/* TODO: CTA copy hidden if favorites cards present */}
          <p className={styles.ctaCopy}>{favorites.ctaCopy}</p>
          {/* TODO: Set up code for favorites cards */}
        </div>
        {
        personalized.map((pzn, index: number) => {
          const icon = pzn.icon as Icons
          const hasLink = (authCode !== "Anon") || (authCode === "Anon" && pzn.linkVariable)
          return (
            <>
              {pzn.visibilityRules.includes(authCode) && (
                  <div key={index} className={styles.personalizedWrapper}>
                  <div className={styles.subHeadWrapper}>
                    <Icon type={icon} />
                    {
                      hasLink ? (
                        <a href={pzn.url} className={styles.subHeading}>{pzn.headline}<span className={styles.arrowRight} /></a>
                      ) : (
                        <h3 className={styles.subHeading}>{pzn.headline}</h3>
                      )
                    }
                  </div>
                  {authCode === "Anon" && <p className={styles.ctaCopy}>{pzn.ctaCopy}</p>}
                </div>
              )}
            </>
          )
        })
      }
      {authCode !== "Member" && (<div className={styles.signupFooter}>
        <EditorialText content={ctaFooter[authCode]} />
      </div>)}
      </div>
    </div>
  );
}

export default MyStuff