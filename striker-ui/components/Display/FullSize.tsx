import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { RFB } from 'novnc-node';
import { Box, Menu, MenuItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import IconButton from '@material-ui/core/IconButton';
import VncDisplay from './VncDisplay';
import { Panel } from '../Panels';
import { BLACK, RED, TEXT } from '../../lib/consts/DEFAULT_THEME';
import keyCombinations from './keyCombinations';

const useStyles = makeStyles(() => ({
  displayBox: {
    paddingTop: '1em',
    paddingBottom: 0,
  },
  closeButton: {
    borderRadius: 8,
    backgroundColor: RED,
    '&:hover': {
      backgroundColor: RED,
    },
  },
  keyboardButton: {
    borderRadius: 8,
    backgroundColor: TEXT,
    '&:hover': {
      backgroundColor: TEXT,
    },
  },
  closeBox: {
    paddingBottom: '1em',
    paddingLeft: '.7em',
    paddingRight: 0,
  },
  buttonsBox: {
    paddingTop: 0,
  },
  keysItem: {
    backgroundColor: TEXT,
    paddingRight: '3em',
    '&:hover': {
      backgroundColor: TEXT,
    },
  },
}));

interface PreviewProps {
  setMode: Dispatch<SetStateAction<boolean>>;
}

const FullSize = ({ setMode }: PreviewProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const rfb = useRef<typeof RFB>(undefined);
  const [displaySize, setDisplaySize] = useState<
    | {
        width: string | number;
        height: string | number;
      }
    | undefined
  >(undefined);
  const classes = useStyles();

  useEffect(() => {
    setDisplaySize({
      width: '75vw',
      height: '80vh',
    });
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleSendKeys = () => {
    if (rfb.current) {
      rfb.current.sendCtrlAltDel();
      setAnchorEl(null);
    }
  };

  return (
    <Panel>
      <Box display="flex" className={classes.displayBox}>
        <Box>
          <VncDisplay
            rfb={rfb}
            url="wss://spain.cdot.systems:5000/"
            style={displaySize}
          />
        </Box>
        <Box>
          <Box className={classes.closeBox}>
            <IconButton
              className={classes.closeButton}
              style={{ color: TEXT }}
              aria-label="upload picture"
              component="span"
              onClick={() => setMode(true)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box className={classes.closeBox}>
            <IconButton
              className={classes.keyboardButton}
              style={{ color: BLACK }}
              aria-label="upload picture"
              component="span"
              onClick={handleClick}
            >
              <KeyboardIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              {keyCombinations.map(({ keys }) => {
                return (
                  <MenuItem
                    onClick={handleSendKeys}
                    className={classes.keysItem}
                    key={keys}
                  >
                    <Typography variant="subtitle1">{keys}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Box>
      </Box>
    </Panel>
  );
};

export default FullSize;
