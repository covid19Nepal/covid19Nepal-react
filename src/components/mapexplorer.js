import React, {useState, useEffect, useMemo, useCallback} from 'react';
import ChoroplethMap from './choropleth';
import {MAP_TYPES, MAPS_DIR} from '../constants';
import {formatDate, formatDateAbsolute} from '../utils/common-functions';
import {formatDistance} from 'date-fns';

const mapMeta = {
  Nepal: {
    name: 'Nepal',
    geoDataFile: `${MAPS_DIR}/nepal.json`,
    mapType: MAP_TYPES.COUNTRY,
    graphObjectName: 'nepal',
  },
  'Province 1': {
    name: 'Province 1',
    geoDataFile: `${MAPS_DIR}/province1.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province1_district',
  },
  'Province 2': {
    name: 'Province 2',
    geoDataFile: `${MAPS_DIR}/province2.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province2_district',
  },
  'Province 3': {
    name: 'Province 3',
    geoDataFile: `${MAPS_DIR}/province3.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province3_district',
  },
  'Province 4': {
    name: 'Province 4',
    geoDataFile: `${MAPS_DIR}/province4.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province4_district',
  },
  'Province 5': {
    name: 'Province 5',
    geoDataFile: `${MAPS_DIR}/province5.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province5_district',
  },
  'Province 6': {
    name: 'Province 6',
    geoDataFile: `${MAPS_DIR}/province6.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province6_district',
  },
  'Province 7': {
    name: 'Province 7',
    geoDataFile: `${MAPS_DIR}/province7.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province7_district',
  },
};

export default function ({
  states,
  stateDistrictWiseData,
  stateTestData,
  regionHighlighted,
}) {
  const [selectedRegion, setSelectedRegion] = useState({});
  const [currentHoveredRegion, setCurrentHoveredRegion] = useState({});
  const [panelRegion, setPanelRegion] = useState({});
  /* const [testObj, setTestObj] = useState({});*/
  const [currentMap, setCurrentMap] = useState(mapMeta.Nepal);

  useEffect(() => {
    const region = getRegionFromState(states[1]);
    setPanelRegion(region);
    setCurrentHoveredRegion(region);
  }, [states]);

  if (!panelRegion) {
    return null;
  }

  const [statistic, currentMapData] = useMemo(() => {
    const statistic = {total: 0, maxConfirmed: 0};
    let currentMapData = {};

    if (currentMap.mapType === MAP_TYPES.COUNTRY) {
      currentMapData = states.reduce((acc, state) => {
        if (state.state === 'Total') {
          return acc;
        }
        const confirmed = parseInt(state.confirmed);
        statistic.total += confirmed;
        if (confirmed > statistic.maxConfirmed) {
          statistic.maxConfirmed = confirmed;
        }

        acc[state.state] = state.confirmed;
        return acc;
      }, {});
    } else if (currentMap.mapType === MAP_TYPES.STATE) {
      const districtWiseData = (
        stateDistrictWiseData[currentMap.name] || {districtData: {}}
      ).districtData;
      currentMapData = Object.keys(districtWiseData).reduce((acc, district) => {
        const confirmed = parseInt(districtWiseData[district].confirmed);
        statistic.total += confirmed;
        if (confirmed > statistic.maxConfirmed) {
          statistic.maxConfirmed = confirmed;
        }
        acc[district] = districtWiseData[district].confirmed;
        return acc;
      }, {});
    }
    return [statistic, currentMapData];
  }, [currentMap, states, stateDistrictWiseData]);

  const setHoveredRegion = useCallback(
    (name, currentMap) => {
      if (currentMap.mapType === MAP_TYPES.COUNTRY) {
        const region = getRegionFromState(
          states.filter((state) => name === state.state)[0]
        );
        setCurrentHoveredRegion(region);
        setPanelRegion(region);
      } else if (currentMap.mapType === MAP_TYPES.STATE) {
        const state = stateDistrictWiseData[currentMap.name] || {
          districtData: {},
        };
        let districtData = state.districtData[name];
        if (!districtData) {
          districtData = {
            confirmed: 0,
            active: 0,
            deaths: 0,
            recovered: 0,
          };
        }
        setCurrentHoveredRegion(getRegionFromDistrict(districtData, name));
        const panelRegion = getRegionFromState(
          states.filter((state) => currentMap.name === state.state)[0]
        );
        setPanelRegion(panelRegion);
      }
    },
    [states, stateDistrictWiseData]
  );

  useEffect(() => {
    if (regionHighlighted === undefined) {
      return;
    } else if (regionHighlighted === null) {
      setSelectedRegion(null);
      return;
    }
    const isState = !('district' in regionHighlighted);
    if (isState) {
      const newMap = mapMeta['Nepal'];
      setCurrentMap(newMap);
      const region = getRegionFromState(regionHighlighted.state);
      setHoveredRegion(region.name, newMap);
      setSelectedRegion(region.name);
    } else {
      const newMap = mapMeta[regionHighlighted.state.state];
      if (!newMap) {
        return;
      }
      setCurrentMap(newMap);
      setHoveredRegion(regionHighlighted.district, newMap);
      setSelectedRegion(regionHighlighted.district);
    }
  }, [regionHighlighted, currentMap.mapType, setHoveredRegion]);

  const getRegionFromDistrict = (districtData, name) => {
    if (!districtData) {
      return;
    }
    const region = {...districtData};
    if (!region.name) {
      region.name = name;
    }
    return region;
  };

  const getRegionFromState = (state) => {
    if (!state) {
      return;
    }
    const region = {...state};
    if (!region.name) {
      region.name = region.state;
    }
    return region;
  };

  const switchMapToState = useCallback(
    (name) => {
      const newMap = mapMeta[name];
      if (!newMap) {
        return;
      }
      setCurrentMap(newMap);
      if (newMap.mapType === MAP_TYPES.COUNTRY) {
        setHoveredRegion(states[1].state, newMap);
      } else if (newMap.mapType === MAP_TYPES.STATE) {
        const districtData = (stateDistrictWiseData[name] || {districtData: {}})
          .districtData;
        const topDistrict = Object.keys(districtData)
          .filter((name) => name !== 'Unknown')
          .sort((a, b) => {
            return districtData[b].confirmed - districtData[a].confirmed;
          })[0];
        setHoveredRegion(topDistrict, newMap);
      }
    },
    [setHoveredRegion, stateDistrictWiseData, states]
  );

  const {name, lastupdatedtime} = currentHoveredRegion;

  /* useEffect(() => {
    let found = false;
    stateTestData.forEach((testObj, index) => {
      if (testObj.state === panelRegion.name) {
        found = true;
        setTestObj(testObj);
      }
    });
    if (!found) setTestObj({});
  }, [panelRegion, stateTestData, testObj]);*/

  return (
    <div className="MapExplorer fadeInUp" style={{animationDelay: '1.5s'}}>
      <div className="header">
        <h1>{currentMap.name}</h1>
        <h6>
          {window.innerWidth <= 769 ? 'Tap' : 'Hover'} over a{' '}
          {currentMap.mapType === MAP_TYPES.COUNTRY ? 'state/ut' : 'district'}{' '}
          for more details
        </h6>
      </div>

      <div className="map-stats">
        <div className="stats fadeInUp" style={{animationDelay: '2s'}}>
          <h5>{window.innerWidth <= 769 ? 'Cnfmd' : 'Confirmed'}</h5>
          <div className="stats-bottom">
            <h1>{panelRegion.confirmed}</h1>
            <h6>{}</h6>
          </div>
        </div>

        <div
          className="stats is-blue fadeInUp"
          style={{animationDelay: '2.1s'}}
        >
          <h5>{window.innerWidth <= 769 ? 'Actv' : 'Active'}</h5>
          <div className="stats-bottom">
            <h1>{panelRegion.active || ''}</h1>
            <h6>{}</h6>
          </div>
        </div>

        <div
          className="stats is-green fadeInUp"
          style={{animationDelay: '2.2s'}}
        >
          <h5>{window.innerWidth <= 769 ? 'Rcvrd' : 'Recovered'}</h5>
          <div className="stats-bottom">
            <h1>{panelRegion.recovered || ''}</h1>
            <h6>{}</h6>
          </div>
        </div>

        <div
          className="stats is-gray fadeInUp"
          style={{animationDelay: '2.3s'}}
        >
          <h5>{window.innerWidth <= 769 ? 'Dcsd' : 'Deceased'}</h5>
          <div className="stats-bottom">
            <h1>{panelRegion.deaths || ''}</h1>
            <h6>{}</h6>
          </div>
        </div>

        {/* <div
          className="stats is-purple tested fadeInUp"
          style={{animationDelay: '2.4s'}}
        >
          <h5>{window.innerWidth <= 769 ? 'Tested' : 'Tested'}</h5>
          <div className="stats-bottom">
            <h1>{testObj?.totaltested || '-'}</h1>
          </div>
          <h6 className="timestamp">
            {!isNaN(new Date(testObj?.updatedon))
              ? `As of ${format(
                  parse(testObj?.updatedon, 'dd/MM/yyyy', new Date()),
                  'dd MMM'
                )}`
              : ''}
          </h6>
          {testObj?.totaltested?.length > 1 && (
            <a href={testObj.source} target="_noblank">
              <Icon.Link />
            </a>
          )}
        </div>
        */}
      </div>

      <div className="meta fadeInUp" style={{animationDelay: '2.4s'}}>
        <h2>{name}</h2>
        {lastupdatedtime && (
          <div
            className={`last-update ${
              currentMap.mapType === MAP_TYPES.STATE
                ? 'district-last-update'
                : 'state-last-update'
            }`}
          >
            <h6>Last Updated</h6>
            <h3
              title={
                isNaN(Date.parse(formatDate(lastupdatedtime)))
                  ? ''
                  : formatDateAbsolute(lastupdatedtime)
              }
            >
              {isNaN(Date.parse(formatDate(lastupdatedtime)))
                ? ''
                : formatDistance(
                    new Date(formatDate(lastupdatedtime)),
                    new Date()
                  ) + ' Ago'}
            </h3>
          </div>
        )}

        {currentMap.mapType === MAP_TYPES.STATE ? (
          <h4 className="district-confirmed">
            Confirmed cases:{' '}
            {currentMapData[currentHoveredRegion.name]
              ? currentMapData[currentHoveredRegion.name]
              : 0}
          </h4>
        ) : null}

        {currentMap.mapType === MAP_TYPES.STATE &&
        currentMapData.Unknown > 0 ? (
          <h4 className="unknown">
            Districts unknown for {currentMapData.Unknown} people
          </h4>
        ) : null}

        {currentMap.mapType === MAP_TYPES.STATE ? (
          <div
            className="button back-button"
            onClick={() => switchMapToState('Nepal')}
          >
            Back
          </div>
        ) : null}
      </div>

      <ChoroplethMap
        statistic={statistic}
        mapMeta={currentMap}
        mapData={currentMapData}
        setHoveredRegion={setHoveredRegion}
        changeMap={switchMapToState}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
    </div>
  );
}
