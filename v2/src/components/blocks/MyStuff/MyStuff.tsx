import styles from './styles/myStuff.module.scss';
import Icon from './partials/Icon';
import EditorialText from '../../partials/EditorialText/EditorialText';
import FavoriteCard from './partials/FavoriteCard/FavoriteCard'
import {Favorite} from './types'

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
      linkAgnostic: false,
      url: "/favorite_collections/fresh_picks", 
      visibilityRules: ["Member", "Anon", "Registrant", "Cancelled"]
    },
    {
      ctaCopy: "Find a new exciting recipe to try today!",
      headline: "Surprise Me",
      icon: "sparkle",
      linkAgnostic: true,
      url: "/", //TODO: Will this be a value from BE vs. being a static url?
      visibilityRules: ["Member", "Anon", "Registrant", "Cancelled"]
    },
    {
      headline: "My Account",
      icon: "user",
      linkAgnostic: false,
      url: "/user",
      visibilityRules: ["Member"]
    },
    {
      headline: "Manage Profile",
      icon: "user",
      linkAgnostic: false,
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
  authCode: Auth;
  favoritesList?: Favorite[];
  onClick?(): void;
}

export const MyStuff: React.FC<MyStuffProps> = ({ authCode, favoritesList, onClick }: MyStuffProps) => {
  const { personalized, favorites, ctaFooter } = content
  const hasNoFavorites = !favoritesList || authCode === 'Anon'
  return (
    <div>
      <div className={styles.topBar}></div>
      <div className={styles.wrapper}>
        <h2 className={styles.headline}>My Stuff</h2>
        <div className={styles.favoritesWrapper}>
          <div className={styles.subHeadWrapper}>
            <Icon type="save" />
            {hasNoFavorites ? (
              <h3 className={styles.subHeading}>{favorites.headline}</h3>
              ) : (
                <a href={favorites.url} className={styles.subHeading}>{favorites.headline}<span className={styles.arrowRight} /></a>
            )}
          </div>
          {hasNoFavorites && 
            <p className={styles.ctaCopy}>{favorites.ctaCopy}</p>
          }
          {(favoritesList && authCode !== 'Anon') && (
            <div className={styles.favoritesListWrapper}>
            {favoritesList.map((favorite, index: number) => (
              <div key={index} className={styles.favoritesList}>
                <FavoriteCard favorite={favorite}/>
              </div>
            ))}
            </div>
          )}
        </div>
        {
        personalized.map((pzn, index: number) => {
          const icon = pzn.icon as Icons
          const hasLink = (authCode !== "Anon") || (authCode === "Anon" && pzn.linkAgnostic)
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
      {authCode !== "Member" && 
        <div className={styles.signupFooter}>
          <EditorialText content={ctaFooter[authCode]} />
        </div>
      }
      </div>
    </div>
  );
}

export default MyStuff