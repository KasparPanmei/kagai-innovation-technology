
import { useEffect } from 'react';

export default function SecurityRestrictions() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    // Block common browser developer-tool shortcuts
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();

      const isMac = navigator.platform
        .toUpperCase()
        .includes('MAC');

      const modifier = isMac
        ? event.metaKey
        : event.ctrlKey;

      const blocked =
        // F12
        key === 'f12' ||

        // Ctrl/Cmd + U
        (modifier && key === 'u') ||

        // Ctrl/Cmd + Shift + I/J/C/K
        (modifier && event.shiftKey &&
          ['i', 'j', 'c', 'k'].includes(key));

      if (blocked) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener(
      'contextmenu',
      handleContextMenu
    );

    document.addEventListener(
      'keydown',
      handleKeyDown,
      true
    );

    return () => {
      document.removeEventListener(
        'contextmenu',
        handleContextMenu
      );

      document.removeEventListener(
        'keydown',
        handleKeyDown,
        true
      );
    };
  }, []);

  return null;
}

import { useEffect } from 'react';

export default function SecurityRestrictions() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    // Block common browser developer-tool shortcuts
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();

      const isMac = navigator.platform
        .toUpperCase()
        .includes('MAC');

      const modifier = isMac
        ? event.metaKey
        : event.ctrlKey;

      const blocked =
        // F12
        key === 'f12' ||

        // Ctrl/Cmd + U
        (modifier && key === 'u') ||

        // Ctrl/Cmd + Shift + I/J/C/K
        (modifier && event.shiftKey &&
          ['i', 'j', 'c', 'k'].includes(key));

      if (blocked) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener(
      'contextmenu',
      handleContextMenu
    );

    document.addEventListener(
      'keydown',
      handleKeyDown,
      true
    );

    return () => {
      document.removeEventListener(
        'contextmenu',
        handleContextMenu
      );

      document.removeEventListener(
        'keydown',
        handleKeyDown,
        true
      );
    };
  }, []);

  return null;
}
