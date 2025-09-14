import { features, Feature } from '../models/features';

export const getFeatures = (): { success: boolean; data: Feature[] } => {
  return {
    success: true,
    data: features
  };
};

export const getFeatureById = (id: string): { success: boolean; data?: Feature; message?: string } => {
  const feature = features.find(feature => feature.id === id);
  
  if (!feature) {
    return {
      success: false,
      message: `Feature with id ${id} not found`
    };
  }
  
  return {
    success: true,
    data: feature
  };
};