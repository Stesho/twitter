import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  id: string;
  children: ReactNode;
  mountNode?: HTMLElement;
};

export const Portal = ({
  id,
  children,
  mountNode = document.body,
}: PortalProps) => {
  const [container] = useState<HTMLElement>(() => {
    const newContainer = document.createElement('div');
    newContainer.setAttribute('id', id);

    return newContainer;
  });

  useEffect(() => {
    mountNode.appendChild(container);
    return () => {
      mountNode.removeChild(container);
    };
  }, [id, container, mountNode]);

  return container ? createPortal(children, container) : null;
};
