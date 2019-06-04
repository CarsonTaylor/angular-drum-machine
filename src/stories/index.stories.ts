import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { withKnobs, text, number, boolean, array, select, radios, color, date, button } from '@storybook/addon-knobs';

import { Welcome, Button } from '@storybook/angular/demo';
import { PadComponent } from '../app/pad/pad.component';
import { SAMPLES } from '../app/samples';
import { PadcolumnComponent } from 'src/app/padcolumn/padcolumn.component';
import { BoardComponent } from 'src/app/board/board.component';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'with some emoji and action',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }),
    { notes: 'My notes on a button with emojis' }
  );

storiesOf('Pad', module)
  .addDecorator(withKnobs)
  .add('basic sound pad', () => {
  const x = number('x',0);
  const y = number('y',0);
  const padcolor = color('padcolor', 'grey');

  return{
    component: PadComponent,
    props:{
      x,
      y,
      padcolor,
    },
  };
});

storiesOf('Board', module)
  .addDecorator(withKnobs)
  .add('Pad Column', () => {
  const boardcolor = color('board color', 'grey');

  return{
    component: BoardComponent,
    props:{
      boardcolor,
    },
  };
});
