import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      setLoading(true);
      const response = await api.get('/portfolio');
      setPortfolioData(response.data.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching portfolio data:', err);
      setError('Failed to load portfolio data');
    } finally {
      setLoading(false);
    }
  };

  const trackPageView = async (page) => {
    try {
      await api.post('/analytics/track', {
        page,
        referrer: document.referrer,
        sessionId: sessionStorage.getItem('sessionId') || generateSessionId()
      });
    } catch (err) {
      console.error('Error tracking page view:', err);
    }
  };

  const generateSessionId = () => {
    const sessionId = Math.random().toString(36).substring(2, 15) + 
                     Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('sessionId', sessionId);
    return sessionId;
  };

  const submitContact = async (contactData) => {
    try {
      const response = await api.post('/contact', contactData);
      return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to send message');
    }
  };

  const value = {
    portfolioData,
    loading,
    error,
    trackPageView,
    submitContact,
    refetch: fetchPortfolioData
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};