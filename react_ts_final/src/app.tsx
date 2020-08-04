import * as React from 'react';
import * as ReactDom from 'react-dom';

import { HelloComponent } from './hello';

ReactDom.render(
    <HelloComponent userName="Cyclone" />,
    document.getElementById('root')
)