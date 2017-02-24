const React = window.React = require('react');
import AssetCard from './AssetCard.jsx';
import AssetPair from './AssetPair.jsx';
import CustomMarketPicker from './CustomMarketPicker.jsx';
import Stellarify from '../lib/Stellarify';
import _ from 'lodash';

let markets = [
  {
    baseBuying: StellarSdk.Asset.native(),
    counterSelling: new StellarSdk.Asset('FUNT', 'GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU'),
  },
  {
    baseBuying: new StellarSdk.Asset('THB', 'GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU'),
    counterSelling: new StellarSdk.Asset('FUNT', 'GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU'),
  },
  {
    baseBuying: StellarSdk.Asset.native(),
    counterSelling: new StellarSdk.Asset('USD', 'GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU'),
  },
  {
    baseBuying: new StellarSdk.Asset('USD', 'GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU'),
    counterSelling: new StellarSdk.Asset('THB', 'GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU'),
  },
  {
    baseBuying: new StellarSdk.Asset('USD', 'GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU'),
    counterSelling: new StellarSdk.Asset('BTC', 'GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU'),
  },
  {
    baseBuying: new StellarSdk.Asset('ETH', 'GDIR44J6EE3SVP4OAOAF7FAJGBXIHELRKHGC3RFAYXDE4I73S6ZNNW2F'),
    counterSelling: new StellarSdk.Asset('BTC', 'GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU'),
  },
  {
    baseBuying: StellarSdk.Asset.native(),
    counterSelling: new StellarSdk.Asset('mBTC', 'GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU'),
  },
  {
    baseBuying: StellarSdk.Asset.native(),
    counterSelling: new StellarSdk.Asset('BTC', 'GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH'),
  },
  {
    baseBuying: StellarSdk.Asset.native(),
    counterSelling: new StellarSdk.Asset('JPY', 'GBVAOIACNSB7OVUXJYC5UE2D4YK2F7A24T7EE5YOMN4CE6GCHUTOUQXM'),
  },
  {
    baseBuying: StellarSdk.Asset.native(),
    counterSelling: new StellarSdk.Asset('PHP', 'GBUQWP3BOUZX34TOND2QV7QQ7K7VJTG6VSE7WMLBTMDJLLAW7YKGU6EP'),
  },
  {
    baseBuying: StellarSdk.Asset.native(),
    counterSelling: new StellarSdk.Asset('CNY', 'GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX'),
  },
  {
    baseBuying: new StellarSdk.Asset('BTC', 'GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH'),
    counterSelling: new StellarSdk.Asset('EUR', 'GDI73WJ4SX7LOG3XZDJC3KCK6ED6E5NBYK2JUBQSPBCNNWEG3ZN7T75U'),
  },
  {
    baseBuying: StellarSdk.Asset.native(),
    counterSelling: new StellarSdk.Asset('EUR', 'GDI73WJ4SX7LOG3XZDJC3KCK6ED6E5NBYK2JUBQSPBCNNWEG3ZN7T75U'),
  },
  {
    baseBuying: StellarSdk.Asset.native(),
    counterSelling: new StellarSdk.Asset('DEMO', 'GBAMBOOZDWZPVV52RCLJQYMQNXOBLOXWNQAY2IF2FREV2WL46DBCH3BE'),
  },
];

export default class Markets extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let rows = [];
    _.each(markets, (market, index) => {
      rows.push(<AssetPair key={index} row={true} baseBuying={market.baseBuying} counterSelling={market.counterSelling}></AssetPair>)
    })
    return (
      <div>
        <div className="so-back islandBack islandBack--t">
          <CustomMarketPicker row={true}></CustomMarketPicker>
        </div>
        <div className="so-back islandBack">
          <div className="island">
            <div className="island__header">
              Popular exchange markets
            </div>
            <div className="island__sub">
              <div className="island__sub__division">
                <h3 className="island__sub__division__title">Base asset</h3>
              </div>
              <div className="island__sub__division">
                <h3 className="island__sub__division__title">Counter asset</h3>
              </div>
            </div>
            {rows}
          </div>
        </div>
      </div>
    );
  }
};
