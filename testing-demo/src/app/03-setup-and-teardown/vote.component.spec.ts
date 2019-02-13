import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let voteC : VoteComponent;

  beforeEach(() => {
   voteC = new VoteComponent();
  });

  it('to return 1', () => {
    voteC.upVote();
    expect(voteC.totalVotes).toBe(1);
  });

  it('to return 0', () => {
    voteC.upVote();
    expect(voteC.totalVotes).toBe(-1);
  });
});