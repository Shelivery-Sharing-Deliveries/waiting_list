export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const translations = {
  en: {
    nav: {
      joinBeta: 'Join Beta',
    },
    hero: {
      badge: 'Starting in Lausanne',
      title: 'Delivery costs,',
      titleHighlight: 'Shared.',
      subtitle:
        'No more minimum order limit, and no more delivery fee. Join forces with your neighbors to unlock premium delivery for free.',
      subtitleShort: 'No more minimum order limit, and no more delivery fee.',
    },
    features: {
      sectionTitle: 'Better for you, better for the city.',
      orderTogether: {
        title: 'Order Together',
        descriptionShort:
          "Browse local spots, see who's ordering nearby, and hop on their delivery run instantly.",
        descriptionLong:
          'Shelivery syncs orders from nearby neighbors, turning individual trips into community pools.',
      },
      save: {
        title: 'Save up to 70%',
        descriptionShort:
          'The delivery fee is split equally among everyone in the group. One stop, minimal cost.',
        descriptionLong:
          'Split delivery fees and service charges. Most users reach zero delivery cost within 5 minutes of posting.',
      },
      eco: {
        title: 'Eco-Friendly',
        descriptionShort:
          "Reducing Lausanne's traffic and carbon footprint by consolidating multiple deliveries into one.",
        descriptionLong:
          'Fewer delivery bikes on the road means less congestion and a smaller carbon footprint for every meal.',
      },
    },
    cta: {
      title: 'Ready to stop paying for delivery?',
      subtitle:
        'Be the first to know when we launch in your neighborhood. Limited slots for beta testers.',
    },
    emailForm: {
      placeholder: 'Enter your email',
      button: 'Get Early Access',
      loading: 'Loading...',
      successMessage: "You're getting into the queue!",
      helperText: "Rejoignez plus de 1 200 personnes sur la liste d'attente de Lausanne.",
      errorInvalidEmail: 'Please enter a valid email address',
      errorFailed: 'Failed to join. Please try again.',
      errorGeneral: 'An error occurred. Please try again.',
    },
    footer: {
      tagline: 'Starting in Lausanne.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      contactUs: 'Contact Us',
      instagram: 'Instagram',
    },
    thankYou: {
      title: "You're on the list! \uD83C\uDF89",
      description:
        "Thank you for joining the Shelivery waiting list. We'll notify you as soon as we launch in Lausanne.",
      waitingCount: '1,201 people',
      waitingText: 'are now waiting with you. The more people join, the faster we can launch!',
      shareTitle: 'Help us grow faster',
      shareSubtitle: 'Share with friends in Lausanne to move up the list.',
      shareButton: 'Share',
      copyLink: 'Copy Link',
      backToHome: 'Back to Home',
      questions: 'Questions? Contact us at',
      tagline: 'Delivery costs, Shared. Starting in Lausanne.',
      shareNativeTitle: 'Join Shelivery Waitlist',
      shareNativeText: 'Join me on the Shelivery waiting list - Delivery costs, Shared!',
    },
  },
  fr: {
    nav: {
      joinBeta: 'Rejoindre la Beta',
    },
    hero: {
      badge: 'A partir de Lausanne',
      title: 'Les frais de livraison,',
      titleHighlight: 'Partages.',
      subtitle:
        "Plus de commande minimum, plus de frais de livraison. Unissez-vous a vos voisins pour beneficier d'une livraison premium gratuite.",
      subtitleShort: 'Plus de commande minimum, plus de frais de livraison.',
    },
    features: {
      sectionTitle: 'Mieux pour vous, mieux pour la ville.',
      orderTogether: {
        title: 'Commander Ensemble',
        descriptionShort:
          'Parcourez les spots locaux, voyez qui commande a proximite et rejoignez leur livraison instantanement.',
        descriptionLong:
          'Shelivery synchronise les commandes des voisins proches, transformant les livraisons individuelles en groupes communautaires.',
      },
      save: {
        title: "Economisez jusqu'a 70%",
        descriptionShort:
          'Les frais de livraison sont partages equitablement entre tous les membres du groupe. Une seule course, un cout minimal.',
        descriptionLong:
          'Partagez les frais de livraison et de service. La plupart des utilisateurs atteignent zero cout de livraison en moins de 5 minutes.',
      },
      eco: {
        title: 'Eco-Responsable',
        descriptionShort:
          "Reduire le trafic et l'empreinte carbone de Lausanne en regroupant plusieurs livraisons en une seule.",
        descriptionLong:
          'Moins de velos de livraison sur les routes signifie moins de congestion et une empreinte carbone reduite pour chaque repas.',
      },
    },
    cta: {
      title: 'Pret a ne plus payer pour la livraison ?',
      subtitle:
        'Soyez le premier informe lors de notre lancement dans votre quartier. Places limitees pour les beta-testeurs.',
    },
    emailForm: {
      placeholder: 'Entrez votre email',
      button: 'Acces Anticipe',
      loading: 'Chargement...',
      successMessage: "Vous etes dans la file d'attente !",
      helperText: "Rejoignez plus de 1 200 personnes sur la liste d'attente de Lausanne.",
      errorInvalidEmail: 'Veuillez entrer une adresse email valide',
      errorFailed: 'Echec de inscription. Veuillez reessayer.',
      errorGeneral: 'Une erreur est survenue. Veuillez reessayer.',
    },
    footer: {
      tagline: 'A partir de Lausanne.',
      privacyPolicy: 'Politique de Confidentialite',
      termsOfService: "Conditions d'Utilisation",
      contactUs: 'Nous Contacter',
      instagram: 'Instagram',
    },
    thankYou: {
      title: "Vous etes sur la liste ! \uD83C\uDF89",
      description:
        "Merci d'avoir rejoint la liste d'attente Shelivery. Nous vous informerons des notre lancement a Lausanne.",
      waitingCount: '1 201 personnes',
      waitingText:
        'attendent avec vous. Plus il y a de personnes, plus vite nous pouvons lancer !',
      shareTitle: 'Aidez-nous a grandir plus vite',
      shareSubtitle: 'Partagez avec vos amis a Lausanne pour monter dans la liste.',
      shareButton: 'Partager',
      copyLink: 'Copier le lien',
      backToHome: "Retour a l'accueil",
      questions: 'Des questions ? Contactez-nous a',
      tagline: 'Les frais de livraison, Partages. A partir de Lausanne.',
      shareNativeTitle: "Rejoignez la liste d'attente Shelivery",
      shareNativeText:
        "Rejoignez-moi sur la liste d'attente Shelivery - Les frais de livraison, Partages !",
    },
  },
} as const;

export type TranslationKeys = typeof translations.en;