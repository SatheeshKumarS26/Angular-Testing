import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('to return a event', () => {
    let total = null;
    component.voteChanged.subscribe(t => total = t;)
    component.upVote();
    expect(total).toBe(1);
  });
});