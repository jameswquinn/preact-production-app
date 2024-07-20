// src/hooks/useMeta.js
import { useEffect } from 'preact/hooks';
import { updateMeta } from '../utils/metaUtils';

export function useMeta(title, description) {
  useEffect(() => {
    document.title = title;
    updateMeta('description', description);
  }, [title, description]);
}
