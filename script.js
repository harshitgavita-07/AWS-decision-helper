function decide() {
  const traffic = document.getElementById("traffic").value;
  const ops = document.getElementById("ops").value;
  const cost = document.getElementById("cost").value;

  let lambdaScore = 0;
  let ec2Score = 0;

  if (traffic === "Low") lambdaScore++; else ec2Score++;
  if (ops === "Yes") lambdaScore++; else ec2Score++;
  if (cost === "Yes") lambdaScore++; else ec2Score++;

  let lambdaSummary = "Lambda 👍\nPros: No servers, auto scaling, pay-per-use\nCons: Cold starts, runtime limits";
  let ec2Summary = "EC2 👍\nPros: Full control, consistent performance\nCons: You manage servers, scaling effort";

  let winner, explanation;

  if (lambdaScore > ec2Score) {
    winner = "✅ Final suggestion: AWS Lambda";
    explanation = "Best when traffic is variable, you want minimal ops, and cost efficiency matters.";
  } else if (ec2Score > lambdaScore) {
    winner = "✅ Final suggestion: Amazon EC2";
    explanation = "Best when traffic is steady/high and you want full control over the environment.";
  } else {
    winner = "🤝 Final suggestion: Both can work";
    explanation = "Your answers are balanced; choose Lambda for less ops, EC2 for more control.";
  }

  const result = lambdaSummary + "\n\n" + ec2Summary + "\n\n" + winner + "\n" + explanation;
  document.getElementById("result").innerText = result;
}
