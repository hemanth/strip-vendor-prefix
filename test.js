import test from 'ava';
import fn from './index.js';

test('title', t => {
    	t.is(fn('-webkit-flex-basis'), 'flex-basis');
    	t.is(fn('-xyz-flex-basis'), '-xyz-flex-basis');
});
