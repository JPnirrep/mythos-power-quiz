import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { interpretations } from "@/data/quizData";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface Scores {
  coeur: number;
  phare: number;
  antenne: number;
  force: number;
}

interface ResultsScreenProps {
  scores: Scores;
}

export function ResultsScreen({ scores }: ResultsScreenProps) {
  const sortedScores = Object.entries(scores).sort(([, a], [, b]) => b - a);
  
  const chartData = {
    labels: [
      `Cœur Vibrant (${scores.coeur}/30)`,
      `Phare de Clarté (${scores.phare}/30)`,
      `Antenne Subtile (${scores.antenne}/30)`,
      `Force Tranquille (${scores.force}/30)`
    ],
    datasets: [{
      label: 'Vos Super-Pouvoirs',
      data: [scores.coeur, scores.phare, scores.antenne, scores.force],
      backgroundColor: 'hsl(198, 75%, 53%, 0.2)', // pepps-blue with opacity
      borderColor: 'hsl(198, 75%, 53%)', // pepps-blue
      pointBackgroundColor: 'hsl(198, 75%, 53%)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'hsl(198, 75%, 53%)'
    }]
  };

  const chartOptions = {
    scales: {
      r: {
        beginAtZero: true,
        max: 30,
        pointLabels: {
          font: { size: 14 },
          color: 'hsl(251, 50%, 33%)' // pepps-indigo
        },
        grid: {
          color: 'hsl(214.3, 31.8%, 91.4%)' // border color
        },
        angleLines: {
          color: 'hsl(214.3, 31.8%, 91.4%)'
        }
      }
    },
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="screen-transition screen-visible text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 font-pepps-title text-primary">
        🎉 Vos Super-Pouvoirs de Sensibles ! 🎉
      </h1>
      <p className="text-lg mb-6 text-muted-foreground font-pepps-body">
        Voici la carte de vos talents. Vos scores les plus élevés sont vos super-pouvoirs dominants.
      </p>
      
      {/* Radar Chart */}
      <div className="w-full max-w-md mx-auto mb-8">
        <Radar data={chartData} options={chartOptions} />
      </div>

      {/* Results Interpretation */}
      <div className="text-left space-y-6">
        {/* Dominant Power */}
        <div className="p-4 rounded-lg border-2 border-secondary bg-secondary/10">
          <h3 className="font-bold text-xl text-primary font-pepps-title">
            Votre Pouvoir Dominant : {interpretations[sortedScores[0][0]].name}
          </h3>
          <p className="font-pepps-body text-foreground">
            <strong>{interpretations[sortedScores[0][0]].power}:</strong> {interpretations[sortedScores[0][0]].description}
          </p>
          <p className="mt-2 font-pepps-body text-foreground">
            <strong>Votre Déclic PEPPS :</strong> {interpretations[sortedScores[0][0]].declic}
          </p>
        </div>

        {/* Growth Area */}
        <div className="p-4 rounded-lg border border-border bg-muted/30">
          <h3 className="font-bold text-xl text-primary font-pepps-title">
            Votre Déclic de Croissance : {interpretations[sortedScores[3][0]].name}
          </h3>
          <p className="font-pepps-body text-foreground">
            Votre score le plus faible n'est pas une faiblesse, c'est votre plus belle opportunité d'évolution ! 
            C'est le domaine où un petit "déclic" pourrait décupler l'impact de vos pouvoirs dominants.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 p-6 rounded-lg bg-muted">
        <h3 className="text-2xl font-bold mb-2 text-primary font-pepps-title">
          Cette exploration vous a parlé ?
        </h3>
        <p className="mb-4 text-muted-foreground font-pepps-body">
          Ce n'est que le début. Lors de notre webinaire exclusif, nous vous donnerons les outils 
          concrets pour maîtriser votre profil unique.
        </p>
        <Button variant="pepps" size="lg" className="text-lg">
          S'inscrire au webinaire du 7 octobre
        </Button>
      </div>
    </div>
  );
}