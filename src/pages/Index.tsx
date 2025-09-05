body {
  background: linear-gradient(135deg, #3D2C7D, #28AAE1) fixed;
}

.pepps-pulse {
  animation: pepps-pulse 3s infinite;
}

@keyframes pepps-pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Existing styles... */
.pepps-bd-card {
  position: relative;
  background: linear-gradient(135deg, #F8F7F5, #A8DADC);
  border: 3px solid #3D2C7D;
  border-radius: 20px;
  padding: 2rem;
  overflow: hidden;
}

.pepps-bd-card::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, #FFC425, #28AAE1, #3D2C7D, #FFC425);
  background-size: 400% 400%;
  animation: bd-border-glow 6s ease-in-out infinite;
  border-radius: 25px;
  z-index: -1;
}

@keyframes bd-border-glow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.pepps-webinar-card {
  background: linear-gradient(135deg, #FFC425, #ffdd6b);
  border: 2px solid #3D2C7D;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(61, 44, 125, 0.2);
  transition: all 0.3s ease;
}

.pepps-webinar-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(61, 44, 125, 0.3);
}

.pepps-webinar-button {
  background: #FFC425;
  border: 2px solid #3D2C7D;
  color: #3D2C7D;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  animation: gentle-pulse 4s ease-in-out infinite;
}

.pepps-webinar-button:hover {
  background: #3D2C7D;
  color: #FFC425;
  transform: scale(1.05);
}

@keyframes gentle-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 196, 37, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(255, 196, 37, 0);
  }
}